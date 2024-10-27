import React, { useState } from 'react';

import styles from './CompanySelection.module.css';

import { CompanyCard } from './CompanyCard';


const companies = [

  { id: 1, title: 'Сибинтек', description: 'Lorem ipsum dolor sit ame' },

  { id: 2, title: '2Company', description: 'Lorem ipsum dolor sit ame' },

  { id: 3, title: '3Company', description: 'Lorem ipsum dolor sit ame' },

  { id: 4, title: '4Company', description: 'Lorem ipsum dolor sit ame' }

];


export const CompanySelection = ({onSetCompany}) => {

  const [selectedCompany, setSelectedCompany] = useState(null);


  const handleCompanyChange = (event) => {

    setSelectedCompany(Number(event.target.value));

  };


  const handleContinue = () => {

    if (selectedCompany) {

        onSetCompany(selectedCompany);

    }

  };


  return (

    <main className={styles.container}>


      <header className={styles.header}>

        <h1 className={styles.title}>Выберите компанию:</h1>

      </header>

      <section className={styles.cardsContainer}>

        {companies.map((company) => (

          <CompanyCard

            key={company.id}

            id={`company-${company.id}`}

            title={company.title}

            description={company.description}

            isSelected={selectedCompany === company.id}

            onChange={handleCompanyChange}

            value={company.id}

            name="company"

          />

        ))}

      </section>

      <button

        className={styles.submitButton}

        type="button"

        onClick={handleContinue}

        disabled={!selectedCompany}

      >

        продолжить

      </button>

    </main>

  );

};