import React, { useState } from 'react';
import './App.css';
import { Stack, Typography } from '@mui/material';
import HeroList from './components/heroList';
import allHeroes from './heroes/allHeroes';
import Hero from './types/hero';
import MoveList from './components/moveList';
import InGame from './components/inGame';

export enum DisplayStates {
  HERO_PICKER = "HERO_PICKER",
  IN_GAME = "IN_GAME"
}

function App() {
  const [activeDisplay, setActiveDisplay] = useState<DisplayStates>(DisplayStates.HERO_PICKER)
  const [activeHero, setActiveHero] = useState<Hero | null>(null);

  const selectHero = (hero: Hero) => {
    setActiveHero(hero)
    setActiveDisplay(DisplayStates.IN_GAME)
  }

  return (
    <Stack>
      {activeDisplay === DisplayStates.HERO_PICKER && <Stack direction="column" spacing={2}>
        <Typography variant="h4">Pick a Hero</Typography>
        <HeroList heroes={allHeroes} selectHero={selectHero}/>
      </Stack>}
      {(activeDisplay === DisplayStates.IN_GAME && activeHero) && <InGame hero={activeHero}/>}
    </Stack>
  );
}

export default App;
