import { Fragment, ReactElement, useState, useEffect } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";
import { List } from '@mui/material/';
import CardItem from "./CardItem";

export default function StartupList(): ReactElement {
    const [startups, setStartups] = useState<Startup[]>([]);
    useEffect(() => {
        StartupHttpService.getStartups().then((startups) => {
            setStartups(startups);
        });
    })

    return (
        <Fragment>
            <List>
                {startups.map(startup => (
                    CardItem(startup)
                ))}
            </List>
        </Fragment>
    )
}

