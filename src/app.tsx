import React, { useEffect, useState } from 'react'
import DBState from './DBState';
import MemoryChart from './memoryChart'
import DiskSpace from './diskSpace'
import Grid from './grid';
import DBHealth from './DBHealth';
import "./style/index.scss";
import DBActions from './DBActions';
import { DBContext } from './DBConext';
import { Monitor } from './api/monitor';

const monitor = new Monitor('/endpoint');

const App = () => {
    const [monitorContext, setMonitorContext] = useState({
        monitor,
        trace: false,
        pause: false,
    })
    return (
        <Grid>
            <DBContext.Provider value={{ monitorContext, setMonitorContext }}>
                <DBState gridArea="DBState" />
                <DBActions gridArea="dbActions" />
                <MemoryChart gridArea="memoryChart" />
                <DiskSpace gridArea="diskSpace" />
                {/* <DBHealth gridArea="dbHealth"></DBHealth> */}
            </DBContext.Provider>
        </Grid>
    )
}

export default App
