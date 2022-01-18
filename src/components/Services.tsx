import { Fragment } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ServiceItem from "./ServiceItem";

const services = [
  {
    title: "Personal Chef",
    content: `É um serviço de alimentação personalizado, que atende as necessidades de quem contrata. Nele incluímos Anamnese alimentar, Elaboração e aprovação do cardápio, Lista de compras e a Execução do cardápio em sua casa,  foi criado para pessoas que desejam uma alimentação saudável e equilibrada, porém, preferem focar em diversas outras coisas como passar mais tempo em família ou com quem você ama. O Personal Chef também otimiza seu tempo, traz praticidade e sabor à sua mesa.`,
    alignment: "left",
    video: undefined,
    picture: "/assets/img/personalChefIcon.svg",
    icon: "/assets/img/personalChefIcon.svg",
  },
  {
    title: "Personal Snack",
    content: `É uma opção personalizada, para quem não sabe o que levar de lanche para o trabalho ou até para quem não tem alternativas para o café da manhã. Nele incluímos Anamnese alimentar, Elaboração e aprovação do cardápio, Lista de compras e a Execução do cardápio em sua casa. Deixe nos comentário como você se organiza para suas manhãs ou lanches. Para começar o serviço de Personal Snack, enviamos um questionário, para entendermos os seus gostos e restrições. Após essa fase, elaboramos um cardápio personalizado já com a lista de compras, trazendo assim, snacks saborosos e saudáveis para sua rotina.`,
    alignment: "right",
    video: undefined,
    picture: "/assets/img/personalSnackIcon.svg",
    icon: "/assets/img/personalSnackIcon.svg",
  },
];

interface Props {}

const Services = (props: Props) => {
  return (
    <Flex
      height='1200px'
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      id='servicos'>
      <Heading size={"4xl"}>Serviços</Heading>
      <Flex
        flex={1}
        width={"100%"}
        flexDirection={"column"}
        position={"relative"}>
        {services.map(({ title, content, alignment, picture, video, icon }) => {
          return (
            <Fragment key={title}>
              <Box
                position={"absolute"}
                top={0}
                right={0}
                width={"100%"}
                height={"100%"}
                opacity={"0.3"}
                backgroundImage={`${icon}`}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={
                  alignment === "right" || undefined ? "130% 50%" : "-20% 0%"
                }
                backgroundSize={"40%"}
                zIndex={0}
              />
              <ServiceItem
                title={title}
                content={content}
                alignment={alignment}
                video={video}
                picture={picture}
                icon={icon}
              />
            </Fragment>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Services;
