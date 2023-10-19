import { Grid, Link, Logo, Typography } from '../../components/components.js';
import { AppRoute } from '../../enums/app-route.enum.js';
import styles from './styles.module.scss';

const NUM_CUBES = 6;

const NotFoundPage: React.FC = () => {
    return (
        <Grid container className={styles.pageContainer}>
            <Grid container item className={styles.header}>
                <Logo className={styles.logo} hasLink />
            </Grid>

            <Grid container item className={styles.text}>
                <Typography variant="body1" className={styles.description}>
                    The page you are looking for can’t be found.
                </Typography>
                <Typography variant="h1" className={styles.code}>
                    404
                </Typography>
            </Grid>

            <Grid container item className={styles.linkWrapper}>
                <Link className={styles.link} to={AppRoute.ROOT}>
                    Return to Main
                </Link>
            </Grid>

            {Array.from({ length: NUM_CUBES }).map((_, index) => (
                <div key={index} className="cube"></div>
            ))}
        </Grid>
    );
};

export { NotFoundPage };
