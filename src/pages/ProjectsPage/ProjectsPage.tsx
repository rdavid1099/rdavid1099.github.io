import React, { FC } from "react";
import { TerminalText } from "../../components/TerminalText/TerminalText";
import { useDisplayBlock } from "../../hooks/useDisplayBlock";
import { GITHUB_URL } from "../../constants/urls";

export const ProjectsPage: FC = () => {
  const { displayBlock, displayNextBlock } = useDisplayBlock([
    "introduction",
    "pokemonApi",
    "secretSanta",
    "mrStalky",
    "outro",
  ]);

  return (
    <div>
      {displayBlock.introduction.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.introduction.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("introduction", "pokemonApi", 300);
          }}
          autotypeSpeed="fast"
        >
          Here are some of the projects I'm proud of...
        </TerminalText>
      )}
      {displayBlock.pokemonApi.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.pokemonApi.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("pokemonApi", "secretSanta", 300);
          }}
          autotypeSpeed="fast"
        >
          poke-api-v2 -- A Ruby gem wrapper for https://pokeapi.co/api/v2/
        </TerminalText>
      )}
      {displayBlock.secretSanta.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.secretSanta.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("secretSanta", "mrStalky", 300);
          }}
          autotypeSpeed="fast"
        >
          Secret Santa Slack Bot -- A bot developed for my family's Slack workspace that coordinated and assisted in
          secret communications for our 2020 remote gift exchange
        </TerminalText>
      )}
      {displayBlock.mrStalky.display && (
        <TerminalText
          autotype
          showCursor={displayBlock.mrStalky.showCursor}
          onAutotypeComplete={() => {
            displayNextBlock("mrStalky", "outro", 1300);
          }}
          autotypeSpeed="fast"
        >
          MrStalky Slack Bot -- A fun, little Slack bot that helps track and coordinate trading in the Animal Crossing:
          New Horizons "stalk market"
        </TerminalText>
      )}
      {displayBlock.outro.display && (
        <TerminalText autotype showCursor={displayBlock.outro.showCursor} autotypeSpeed="slow">
          {`These are just a few of the things I've built recently. For a comprehensive list of my work, check out my GitHub profile at ${GITHUB_URL}`}
        </TerminalText>
      )}
    </div>
  );
};
