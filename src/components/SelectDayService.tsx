import React from "react";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MdTipsAndUpdates } from "react-icons/md";

type Props = {};

const WEEKDAYS_SHORT = {
  ptBR: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
};
const MONTHS = {
  ptBR: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
};

const WEEKDAYS_LONG = {
  ptBR: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
};

const FIRST_DAY_OF_WEEK = {
  ptBR: 0,
};

const LABELS = {
  ptBR: { nextMonth: "Próximo mês", previousMonth: "Mês anterior" },
};

const formatDate = (date) => {
  const parsed = parseISO(date);
  return format(parsed, "'Dia' dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
};

const SelectDayService = (props: Props) => {
  const [locale] = React.useState("ptBR");
  const [selectedDay, setSelectedDay] = React.useState("");

  const handleDayClick = (day) => {
    const selected = JSON.stringify(day);
    const sliced = selected.slice(1, -1);
    setSelectedDay(sliced);
  };

  return (
    <Flex
      background={"white"}
      color={"brand.pink"}
      minWidth={"80%"}
      position={"relative"}
      zIndex={0}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        background={"white"}
        textAlign={"center"}
        zIndex={0}
        padding={4}>
        <Text width={"100%"}>
          Selecione um dia disponível
          <Tooltip
            label={
              "o agendamento é confirmado após o pagamento do adiantamento de 50% do valor do serviço"
            }
            fontFamily={"Roboto"}
            fontSize={"md"}
            background={"brand.pink"}
            color={"white"}
            textAlign={"center"}
            padding={2}>
            <IconButton
              aria-label={"Dica para selecionar o dia"}
              margin={2}
              icon={<MdTipsAndUpdates />}
              background={"transparent"}
              _hover={{ display: "transparent" }}
              _focus={{ display: "transparent" }}
              _active={{ display: "transparent" }}
            />
          </Tooltip>
        </Text>
        <DayPicker
          canChangeMonth={false}
          selectedDays={new Date(selectedDay)}
          onDayClick={handleDayClick}
          disabledDays={[{ daysOfWeek: [0, 6] }]}
          locale={locale}
          months={MONTHS[locale]}
          weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]}
        />
        {selectedDay && <Text>{formatDate(selectedDay)}</Text>}
      </Flex>
      <Flex
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        top={"5px"}
        right={"5px"}
        borderWidth={"2px"}
        borderColor={"brand.pink"}
        zIndex={-1}
      />
    </Flex>
  );
};

export default SelectDayService;
