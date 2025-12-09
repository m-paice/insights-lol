// champions
import braum from "../../assets/champions/braum.png";
import drmundo from "../../assets/champions/dr mundo.png";
import sejuani from "../../assets/champions/sejuani.png";
import nidalee from "../../assets/champions/nidalee.png";

import q_nidalee from "../../assets/items/nidalee/q.png";
import q_drmundo from "../../assets/items/dr mundo/q.png";
import p_braum from "../../assets/items/braum/p.png";
import q_sejuani from "../../assets/items/sejuani/q.png";
import w_sejuani from "../../assets/items/sejuani/w.png";
import e_sejuani from "../../assets/items/sejuani/e.png";
import r_sejuani from "../../assets/items/sejuani/r.png";

export const champions = [
  {
    name: "Nidalee",
    image: nidalee,
    updates: [
      {
        hability: {
          image: q_nidalee,
          name: "Q - Javelin Toss",
          description:
            "Bonus Damage Beyond 525 Range: 30-125% ⇒ 0-125% (Note: Damage at ranges below 525 are unaffected.)",
        },
        before: {
          description:
            "Você ganhava bonus de dano de 30-125% com base na distância além de 525.",
          resume: "30-125%",
        },
        after: {
          description:
            "Você não ganha mais bônus de dano com base na distância.",
          resume: "0-125%",
        },
        resume: "NERF",
      },
    ],
  },
  {
    name: "Braum",
    image: braum,
    updates: [
      {
        hability: {
          image: p_braum,
          name: "Passive - Concussive Blows",
          description: "Damage On Follow-up Attacks: 20% ⇒ 40%",
        },
        before: {
          description:
            "Antes Braum recebia 20% de dano adicional em seus ataques seguintes após usar Devastating Charge.",
          resume: "20%",
        },
        after: {
          description:
            "Braum agora recebe 40% de dano adicional em seus ataques seguintes após usar Devastating Charge.",
          resume: "40%",
        },
        resume: "BUFF",
      },
    ],
  },
  {
    name: "Dr. Mundo",
    image: drmundo,
    updates: [
      {
        hability: {
          image: q_drmundo,
          name: "Q - Infected Bonesaw",
          description:
            "Monster Damage Cap: 350 / 425 / 500 / 575 / 650 ⇒ 300 / 375 / 450 / 525 / 600",
        },
        before: {
          description:
            "O dano máximo contra monstros era de 350 / 425 / 500 / 575 / 650.",
          resume: "+D",
        },
        after: {
          description:
            "O dano máximo contra monstros agora é de 300 / 375 / 450 / 525 / 600.",
          resume: "-D",
        },
        resume: "NERF",
      },
    ],
  },
  {
    name: "Sejuani",
    image: sejuani,
    updates: [
      {
        hability: {
          image: q_sejuani,
          name: "Q - Arctic Assault",
          description:
            "Cooldown: 19 / 17.5 / 16 / 14.5 / 13 ⇒ 18 / 16.5 / 15 / 13.5 / 12 seconds; Mana Cost: 70 / 75 / 80 / 85 / 90 ⇒ 60 / 65 / 70 / 75 /80; AP Ratio: 60% ⇒ 75%",
        },
        before: {
          description:
            "Antes a habilidade era mais lenta, custava mais mana e tinha menos poder de habilidade",
          resume: "+TR +M -AP",
        },
        after: {
          description: "Agora a habilidade é mais rápida e custa menos mana",
          resume: "-TR -M +AP",
        },
        resume: "NERF",
      },
      {
        hability: {
          image: w_sejuani,
          name: "W - Winter's Wrath",
          description: "Mana Cost: 65 ⇒ 60; First Hit AP Ratio: 20% ⇒ 30%",
        },
        before: {
          description:
            "Antes a habilidade custava mais mana e tinha menos poder de habilidade no primeiro ataque.",
          resume: "-M -AP",
        },
        after: {
          description:
            "Agora a habilidade custa menos mana e tem mais poder de habilidade no primeiro ataque.",
          resume: "+M +AP",
        },
        resume: "BUFF",
      },
      {
        hability: {
          image: e_sejuani,
          name: "E - Permafrost",
          description: "AP Ratio: 60% ⇒ 70%",
        },
        before: {
          description: "Antes a habilidade tinha menos poder de habilidade.",
          resume: "-AP",
        },
        after: {
          description: "Agora a habilidade tem mais poder de habilidade.",
          resume: "+AP",
        },
        resume: "BUFF",
      },
      {
        hability: {
          image: r_sejuani,
          name: "R - Glacial Prison",
          description: "Cooldown: 130 / 110 / 90 ⇒ 120 / 105 / 90 seconds",
        },
        before: {
          description:
            "Antes a habilidade tinha um tempo de recarga maior no nível 1 e 2.",
          resume: "-TR",
        },
        after: {
          description:
            "Agora a habilidade tem um tempo de recarga menor no nível 1 e 2.",
          resume: "+TR",
        },
        resume: "BUFF",
      },
    ],
  },
];

export type Champion = (typeof champions)[0];
