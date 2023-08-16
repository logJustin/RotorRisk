{/* 5484 */ }
<Grid container spacing={2} sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginBottom: '30px', padding: '15px' }}>
    {/* Flight Date */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Flight Date" />
            </LocalizationProvider>
        </FormControl>
    </Grid>
    {/* Aircraft */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="aircraftSelect">Aircraft</InputLabel>
            <Select
                labelId="aircraftSelect"
                value={aircraft}
                label="aircraft"
                onChange={handleAircraftChange}
            >
                {Object.entries(aircraftInfo).map(([helicopter]) => (
                    <MenuItem key={helicopter} value={helicopter}>{helicopter}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Grid>
    {/* Tail Number */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="tailNumberSelect">Tail Number</InputLabel>
            <Select
                labelId="tailNumberSelect"
                value={tailNumber}
                label="Tail Number"
                onChange={handleTailNumberChange}
            >
                {Object.entries(aircraftInfo[aircraft]).map(([key, value]) => (
                    <MenuItem key={key} value={value}>{value}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Grid>
    {/* Mission */}
    <Grid xs={3}>
        <TextField fullWidth id="outlined-basic" label="Mission" variant="outlined" />
    </Grid>
    {/* Mission Statement */}
    <Grid xs={9}>
        <TextField fullWidth id="outlined-basic" label="Mission Statement" variant="outlined" />
    </Grid>
    {/* Route */}
    <Grid xs={12}>
        <TextField fullWidth id="outlined-basic" label="Route" variant="outlined" />
    </Grid>
    {/* Flight Conditions Selection */}
    <Grid xs={12}>
        <FormControl fullWidth component="fieldset">
            <FormLabel sx={{ textAlign: 'center' }} component="legend">Flight Conditions</FormLabel>
            <FormGroup sx={{ justifyContent: 'space-evenly' }} aria-label="position" row>
                <FormControlLabel
                    value="1"
                    control={<Checkbox />}
                    label="1 - Day"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="2"
                    control={<Checkbox />}
                    label="2 - Night"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="3"
                    control={<Checkbox />}
                    label="3 - NG"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="4"
                    control={<Checkbox />}
                    label="4 - IMC/SIM IMC"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="5"
                    control={<Checkbox />}
                    label="5 - Multi Aircraft"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="6"
                    control={<Checkbox />}
                    label="6 - Terrain Flight"
                    labelPlacement="end"
                />
            </FormGroup>
        </FormControl>
    </Grid>
</Grid>

{/* Aircrew */ }
<Grid container spacing={2} sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginBottom: '30px', padding: '15px' }}>
    {/* Pilot in Command */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="pcSelect">Pilot in Command</InputLabel>
            <Select
                labelId="pcSelect"
                value={pc}
                label="Pilot in Command"
                onChange={handlePCChange}
            >
                {Object.entries(aircrews)
                    .filter(([crewmember, info]) => info.position === 'pilot')
                    .map(([crewmember, info]) => (
                        <MenuItem key={crewmember} value={crewmember}>
                            {crewmember}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>
    <Grid xs={2}>
        <FormControl fullWidth>
            <InputLabel id="pcSeatSelect">PC Seat</InputLabel>
            <Select
                labelId="pcSeatSelect"
                value={pcSeat}
                label="PC Seat"
                onChange={handlePCSeatChange}
            >
                {["L", "R"].map((seat) => (
                    <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Grid>
    {/* Pilot */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="piSelect">Pilot</InputLabel>
            <Select
                labelId="piSelect"
                value={pi}
                label="Pilot"
                onChange={handlePIChange}
            >
                {Object.entries(aircrews)
                    .filter(([crewmember, info]) => info.position === 'pilot')
                    .map(([crewmember, info]) => (
                        <MenuItem key={crewmember} value={crewmember}>
                            {crewmember}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>
    <Grid xs={2}>
        <FormControl fullWidth>
            <InputLabel id="piSeatSelect">PI Seat</InputLabel>
            <Select
                labelId="piSeatSelect"
                value={piSeat}
                label="PI Seat"
                onChange={handlePISeatChange}
            >
                {["L", "R"].map((seat) => (
                    <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Grid>
    {/* NRCM 1 */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="nrcm1Select">NRCM 1</InputLabel>
            <Select
                labelId="nrcm1Select"
                value={nrcm1}
                label="NRCM 1"
                onChange={handleNRCM1Change}
            >
                {Object.entries(aircrews)
                    .filter(([crewmember, info]) => info.position === 'nrcm')
                    .map(([crewmember, info]) => (
                        <MenuItem key={crewmember} value={crewmember}>
                            {crewmember}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>
    {/* NRCM 2 */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="nrcm2Select">NRCM 2</InputLabel>
            <Select
                labelId="nrcm2Select"
                value={nrcm2}
                label="NRCM 2"
                onChange={handleNRCM2Change}
            >
                {Object.entries(aircrews)
                    .filter(([crewmember, info]) => info.position === 'nrcm')
                    .map(([crewmember, info]) => (
                        <MenuItem key={crewmember} value={crewmember}>
                            {crewmember}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>
    {/* NRCM 3 */}
    <Grid xs={4}>
        <FormControl fullWidth>
            <InputLabel id="nrcm3Select">NRCM 3</InputLabel>
            <Select
                labelId="nrcm3Select"
                value={nrcm3}
                label="NRCM 3"
                onChange={handleNRCM3Change}
            >
                {Object.entries(aircrews)
                    .filter(([crewmember, info]) => info.position === 'nrcm')
                    .map(([crewmember, info]) => (
                        <MenuItem key={crewmember} value={crewmember}>
                            {crewmember}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>
    {/* Aircrew Mitigation */}
    <Grid xs={12} >
        <TextField multiline rows={4} fullWidth id="outlined-multiline-static" label="Crew Mitigation Techniques" />
    </Grid>
</Grid>

{/* Mission */ }
<Grid container spacing={2} sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginBottom: '30px', padding: '15px' }}>
    {/* Missions */}
    <Grid xs={12} >

        <FormControl fullWidth component="fieldset">

            <Grid container alignItems="center" justifyContent={'space-around'}>
                {/* Air Assault */}
                <Grid paddingBottom={'16px'}>
                    <Grid item>
                        <FormLabel sx={{ textAlign: 'center' }} component="legend">Air Assault</FormLabel>
                    </Grid>
                    <Grid item>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Day"
                                control={<Checkbox />}
                                label="Day"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Night"
                                control={<Checkbox />}
                                label="Night"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="NG"
                                control={<Checkbox />}
                                label="NG"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                {/* AH64 Attack / Recon / Security */}
                <Grid paddingBottom={'16px'}>
                    <Grid item>
                        <FormLabel sx={{ textAlign: 'center' }} component="legend">Attack / Recon / Security</FormLabel>
                    </Grid>
                    <Grid item>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Day"
                                control={<Checkbox />}
                                label="Day"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Night"
                                control={<Checkbox />}
                                label="Night"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="NG"
                                control={<Checkbox />}
                                label="NG"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                {/* MEDEVAC / Casevac */}
                <Grid paddingBottom={'16px'}>
                    <Grid item>
                        <FormLabel sx={{ textAlign: 'center' }} component="legend">MEDEVAC / CASEVAC</FormLabel>
                    </Grid>
                    <Grid item>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Day"
                                control={<Checkbox />}
                                label="Day"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Night"
                                control={<Checkbox />}
                                label="Night"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="NG"
                                control={<Checkbox />}
                                label="NG"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>

                {/* Multiship */}
                <Grid paddingBottom={'16px'}>
                    <Grid item>
                        <FormLabel sx={{ textAlign: 'center' }} component="legend">Multiship</FormLabel>
                    </Grid>
                    <Grid item>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Day"
                                control={<Checkbox />}
                                label="Day"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Night"
                                control={<Checkbox />}
                                label="Night"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="NG"
                                control={<Checkbox />}
                                label="NG"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>


                {/* MTF General / Training */}
                <Grid paddingBottom={'16px'}>
                    <Grid item>
                        <FormLabel sx={{ textAlign: 'center' }} component="legend">MTF General / Training</FormLabel>
                    </Grid>
                    <Grid item>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Day"
                                control={<Checkbox />}
                                label="Day"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Night"
                                control={<Checkbox />}
                                label="Night"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="NG"
                                control={<Checkbox />}
                                label="NG"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>

                {/* DART / One-time Flight */}
                <Grid paddingBottom={'16px'}>
                    <Grid item>
                        <FormLabel sx={{ textAlign: 'center' }} component="legend">DART / One-time Flight</FormLabel>
                    </Grid>
                    <Grid item>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Day"
                                control={<Checkbox />}
                                label="Day"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Night"
                                control={<Checkbox />}
                                label="Night"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="NG"
                                control={<Checkbox />}
                                label="NG"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>

        </FormControl>
    </Grid>
</Grid>