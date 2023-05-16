import React from "react";
import Card from "../../components/card"

const Home = () => {
  return (
    <>
      <div className="mainly">
        <h1>Home</h1>
        <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
        Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>

        <Card title="My Card" content="This is the content of my card." />
      </div>
    </>);

  
};

export default Home;