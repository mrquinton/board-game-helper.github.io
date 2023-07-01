import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Hero from "../types/hero";

interface HeroListProps {
    heroes: Hero[]
    selectHero: (Hero: Hero) => void
}

export default function HeroList({heroes, selectHero}: HeroListProps) {
    const changeHero = (hero: Hero) => {
        return () => selectHero(hero)
    }

    return <List>
        {heroes.map(hero => {
            return <ListItem>
                <ListItemButton onClick={changeHero(hero)}>
                    <ListItemText primary={hero.name} />
                </ListItemButton>
            </ListItem>
        })}
    </List>
}