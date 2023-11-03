import { useEffect, useState } from "react";
import { Card, Space, Button, Divider, Flex } from "antd";
import "./landing.css";
import { MainContainer, RegisterContainer } from "../Login/login.style";
import Register from "../Login/Login";

const Landing = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    // Initialize the selectedPlan state based on the localStorage value
    const plan = localStorage.getItem("selectedPlan");
    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);

  const handleCardClick = (planType: string) => {
    setSelectedPlan(planType);
  };

  const handleContinueClick = () => {
    localStorage.setItem("selectedPlan", selectedPlan);
    setPlan(selectedPlan);
  };

  const planoMensalDescricao = [
    "Assine nosso Plano Mensal por apenas R$20.",
    "Controle suas finanças pessoais via WhatsApp e Web.",
    "Acesse gráficos detalhados para visualizar seu progresso financeiro.",
    "Receba insights valiosos para tomar decisões financeiras informadas.",
    "Utilize a inteligência artificial para otimizar suas finanças.",
    "Comece a construir um futuro financeiro sólido agora.",
  ];

  const planoAnualDescricao = [
    "Economize 25% com nosso Plano Anual por R$15/mês.",
    "Gerencie suas finanças pessoais via WhatsApp e Web.",
    "Tenha acesso a gráficos interativos para uma visão clara de suas finanças.",
    "Receba insights perspicazes para melhores decisões financeiras.",
    "Utilize a inteligência artificial para orientação financeira.",
    "Garanta sua estabilidade financeira a longo prazo.",
  ];

  return (
    <MainContainer>
      <RegisterContainer>
        {!plan ? (
          <Flex vertical align="center">
            <h1>Escolha o seu plano!</h1>
            <p style={{ marginBottom: "1.5rem", color: "#6c757d" }}>
              Você terá 30 dias grátis para testar nossos recursos incríveis!
            </p>
            <Space direction="horizontal">
              <Card
                title="Plano Anual - R$15 por Mês"
                onClick={() => handleCardClick("anual")}
                className={selectedPlan === "anual" ? "selected-card" : "card"}
                style={{ maxWidth: "400px" }}
              >
                <ul>
                  {planoAnualDescricao.map((descricao, index) => (
                    <li key={index}>{descricao}</li>
                  ))}
                </ul>
                <Divider />
              </Card>
              <Card
                title="Plano Mensal - R$20 por Mês"
                onClick={() => handleCardClick("mensal")}
                className={selectedPlan === "mensal" ? "selected-card" : "card"}
                style={{ maxWidth: "400px" }}
              >
                <ul>
                  {planoMensalDescricao.map((descricao, index) => (
                    <li key={index}>{descricao}</li>
                  ))}
                </ul>
                <Divider />
              </Card>
            </Space>
            <Button
              className="continue-button"
              type="primary"
              block
              style={{ backgroundColor: "#25d366" }}
              onClick={handleContinueClick}
            >
              Continuar
            </Button>
          </Flex>
        ) : (
          <Register />
        )}
      </RegisterContainer>
    </MainContainer>
  );
};

export default Landing;
