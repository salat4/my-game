import { Board } from "../Board/Board"
import { Grid } from "../Grid/Grid"
import s from './Game.module.css'
export const Game = () => {
    return (
        <div className={s.main}>
            <Board>

            </Board>
            <Grid>

            </Grid>
        </div>
    )
}