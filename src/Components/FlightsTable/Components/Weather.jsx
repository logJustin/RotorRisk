import * as React from 'react';
import { Table, TableCell, TableHead, TableRow, Typography, IconButton, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useRiskColor from '../../../hooks/useRiskColor';

export default function Weather({ row }) {
    const [weatherOpen, setWeatherOpen] = React.useState(false);
    const [lowRisk, moderateRisk, highRisk, extremelyHighRisk] = ['#8CD47E', '#F8D66D', '#FF6961', '#653239']

    return (
        <>
            <TableRow>
                <TableCell
                    sx={{
                        borderBottom: 'none',
                        padding: '5px 0px 0px 0px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setWeatherOpen(!weatherOpen)}
                        sx={{ height: '100%' }}
                    >
                        {weatherOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ marginLeft: '8px', color: 'black' }} // Add some margin for spacing
                        >
                            <Typography component={'span'} fontWeight={'bold'}>Weather: </Typography>
                            {row.weathermitigatedrisk}
                        </Typography>
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow sx={{ padding: '0px' }}>
                <TableCell sx={{ borderBottom: 'none', padding: '0px' }}>
                    <Collapse in={weatherOpen} timeout="auto" unmountOnExit>
                        <Table size="small" >
                            <TableHead>
                                <TableRow key='ceilingsHeader' >
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Ceilings, Visibility, & Lunar</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='ceilingsRow' style={{ width: '100%' }}>
                                    <TableCell sx={{ background: useRiskColor('gt1000', row.gt1000), color: 'black', borderBottom: 'none' }} align='center'>Greater than 1000'<br></br>{row.gt1000 && `(${row.gt1000})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('lt1000', row.lt1000), color: 'black', borderBottom: 'none' }} align='center'>Less than 1000' <br></br>{row.lt1000 && `(${row.lt1000})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('lt700', row.lt700), color: 'black', borderBottom: 'none' }} align='center'>Less than 700' <br></br>{row.lt700 && `(${row.lt700})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('lt500', row.lt500), color: 'black', borderBottom: 'none' }} align='center'>Less than 500' <br></br>{row.lt500 && `(${row.lt500})`}</TableCell>
                                </TableRow>
                                <TableRow key='visibilityRow' style={{ width: '100%' }}>
                                    <TableCell sx={{ background: useRiskColor('gt3', row.gt3), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 3 SM <br></br>{row.gt3 && `(${row.gt3})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('gt2', row.gt2), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 2 SM <br></br>{row.gt2 && `(${row.gt2})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('gt1', row.gt1), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Greater than 1 SM <br></br>{row.gt1 && `(${row.gt1})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('lt1', row.lt1), width: '25%', color: 'black', borderBottom: 'none' }} align='center'>Less than 1 SM <br></br>{row.lt1 && `(${row.lt1})`}</TableCell>
                                </TableRow>
                                <TableRow key='LunarData' style={{ width: '100%' }}>
                                    {row.gt25illumandgt30degrees && <TableCell colSpan={4} sx={{ background: lowRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'>'} 25% and 30°</TableCell>}
                                    {row.lt25illumandlt30degrees && <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'<'} 25% and 30°</TableCell>}
                                    {row.gt25illumandgt30degreeslimitedlighting && <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black', borderBottom: 'none' }} align='center'>Lunar Data: {'<'} 25% and 30° (Limited Lighting)</TableCell>}
                                </TableRow>
                                <TableRow key='hazardsHeader'>
                                    <TableCell colSpan={10} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Weather Hazards</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='firstHazardRow'>
                                    <TableCell sx={{ background: useRiskColor('windGt30', row.windgt30), color: 'black', borderBottom: 'none' }} align='center'>Wind {'>'} 30 Knots<br></br>{row.windgt30 && `(${row.windgt30})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: useRiskColor('windGt30Hoist', row.windgt30hoist), color: 'black', borderBottom: 'none' }} align='center'>Wind {'>'} 30 Knots {'(Sling/Hoist)'}<br></br>{row.windgt30hoist && `(${row.windgt30hoist})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('gustSpreadGt20', row.gustspreadgt20), color: 'black', borderBottom: 'none' }} align='center'>Gusts {'>'} 20 Knots <br></br>{row.gustspreadgt20 && `(${row.gustspreadgt20})`}</TableCell>
                                </TableRow>
                                <TableRow colSpan={100} key='secondHazardRow'>
                                    <TableCell sx={{ background: useRiskColor('forecastThunderstorms', row.forecastthunderstorms), color: 'black', borderBottom: 'none' }} align='center'>Forecast Thunderstorms<br></br>{row.forecastthunderstorms && `(${row.forecastthunderstorms})`}</TableCell>
                                    <TableCell colSpan={2} sx={{ background: useRiskColor('modTurbulenceIcing', row.modturbulenceicing), color: 'black', borderBottom: 'none' }} align='center'>Forecast Moderate Turbulence or Icing <br></br>{row.modturbulenceicing && `(${row.modturbulenceicing})`}</TableCell>
                                    <TableCell sx={{ background: useRiskColor('oatNegative10Positive30', row.oatnegative10positive30), color: 'black', borderBottom: 'none' }} align='center'>OAT {'<'}-10°C or {'>'}35°C <br></br>{row.oatnegative10positive30 && `(${row.oatnegative10positive30})`}</TableCell>
                                </TableRow>

                                {row.altRequired &&
                                    <TableRow key='AltRequied'>
                                        <TableCell colSpan={4} sx={{ background: moderateRisk, color: 'black' }} align='center'>Alternate Required: Yes</TableCell>
                                    </TableRow>
                                }
                                <TableRow key='WeatherHeader'>
                                    <TableCell colSpan={5} sx={{ borderBottom: 'none' }}>
                                        <Typography variant="h6" component="div" align='center' fontWeight={'bold'}>Weather Risk</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='WeatherRiskMitigation'>
                                    <TableCell colSpan={5} component="th" scope="row"><Typography fontWeight={500}>Risk Mitigation </Typography> {row.weatherriskmitigation}</TableCell>
                                </TableRow>
                                <TableRow key='WeatherRisk'>
                                    <TableCell colSpan={2} align="left"><Typography fontWeight={500}>Initial Risk </Typography> {row.weatherinitialrisk}</TableCell>
                                    <TableCell colSpan={2} align="left"><Typography fontWeight={500}>Mitigated Risk </Typography> {row.weathermitigatedrisk}</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}