import logging
import requests
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, CallbackContext

# Логирование
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# Токен вашего бота от BotFather
TELEGRAM_TOKEN = '7415193184:AAFb8q0Fl3xKtcZdlc3mROsHKEGQt_xaALM'

# URL стороннего API
API_URL = 'https://billingweblab.ru.tuna.am/query'

# Функция для отправки запроса на сторонний API
def call_external_api(user_message, chat_id):
    try:
        response = requests.post(API_URL, json={
            "text": user_message,
            "service": "vr",
            "source": "тг",
            "chat_id": str(chat_id)
        })
        if response.status_code == 200:
            data = response.json()
            print(response.json())
            return data['answer']
        else:
            return f"Ошибка API: {response.json()}"
    except requests.RequestException as e:
        return f"Произошла ошибка при запросе: {e}"

# Асинхронная функция для обработки команды /start
async def start(update: Update, context: CallbackContext) -> None:
    await update.message.reply_text('Привет! Задай мне любой вопрос, я постараюсь помочь!')

# Асинхронная функция для обработки текстовых сообщений
async def handle_message(update: Update, context: CallbackContext) -> None:
    user_message = update.message.text  # Получаем сообщение от пользователя
    chat_id = update.message.chat_id    # Получаем chat_id

    # Отправляем сообщение на сторонний API и получаем ответ
    api_response = call_external_api(user_message, chat_id)

    # Отправляем ответ пользователю
    await update.message.reply_text(api_response)

# Асинхронная функция для обработки ошибок
async def error(update: Update, context: CallbackContext) -> None:
    logger.warning(f"Ошибка {context.error}")

# Главная функция
def main() -> None:
    # Создаем приложение через ApplicationBuilder и передаем ему токен
    application = ApplicationBuilder().token(TELEGRAM_TOKEN).build()

    # Обработчик команды /start
    application.add_handler(CommandHandler("start", start))

    # Обработчик всех текстовых сообщений
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    # Запускаем бота
    application.run_polling()

# Запуск скрипта
if __name__ == '__main__':
    main()
