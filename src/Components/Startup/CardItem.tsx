import { Card } from '@mui/material/';
import { Startup } from "../../Types/Startup";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardItem(startup: Startup) {
    return (
    <Card  key={startup.id} sx={{m: 1.5}}>
        <CardContent>
            <Typography variant="h5" component="div">
                {startup.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Founded {startup.dateFounded.getFullYear()} | {startup.employees} Employees | {startup.legalEntity} § | {startup.currentInvestmentStage}
            </Typography>
            <Typography variant="body2">
                {startup.shortDescription}
            </Typography>
        </CardContent>
    </Card>)
}