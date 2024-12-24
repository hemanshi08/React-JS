import * as React from "react";

class Timetable extends React.Component {
    render() {
        return (
            <table border={1} align="center" cellPadding={8} cellSpacing={4}>
                <tr align="center">
                    <td colSpan={6}>
                        RK UNIVERSITY,<br />
                        SCHOOL OF ENGINEERING <br />
                        6CEA<br />
                    </td>
                </tr>
                <tr align="center">
                    <td colSpan={3}>Class Counselor: Prof.Anju Kakkad</td>
                    <td colSpan={3}>W.E.F:17/12/2024</td>
                </tr>
                <tr align="center">
                    <td></td>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                </tr>
                <tr align="center">
                    <td>8:00 to 8:55</td>
                    <td rowSpan={2}>React(NV)</td>
                    <td rowSpan={2}>React(NV)</td>
                    <td rowSpan={2}>AL/ML(CP)</td>
                    <td rowSpan={2}>react(SMS)</td>
                    <td rowSpan={2}>PD(DS)</td>
                </tr>
                <tr align="center">
                    <td>8:55 to 9:45</td>
                </tr>
                <tr align="center">
                    <td>class/lab location</td>
                    <td>LL1</td>
                    <td>LL5</td>
                    <td>LL1</td>
                    <td>LL1</td>
                    <td>118</td>
                </tr>
                <tr align="center">
                    <td>9:45 to 10:00</td>
                    <td colSpan={5} align="center">TEA BREAK</td>
                </tr>
                <tr align="center">
                    <td>10:00 to 10:50</td>
                    <td rowSpan={2}>.NET(PJT)</td>
                    <td rowSpan={2}>.NET(BC)</td>                    
                    <td rowSpan={2}>TOC(AKK)</td>
                    <td rowSpan={2}>AL/ML(CP)</td>
                    <td>AL/ML(CP)</td>

                </tr>
                <tr align="center">
                <td>10:00 to 11:40</td>
                <td>TOC(AKK)</td>
                </tr>
                <tr align="center">
                    <td>class/lab location</td>
                    <td>LL1</td>
                    <td>LL5</td>
                    <td>201</td>
                    <td>LL6</td>
                    <td>LL7</td>
                </tr>
                <tr align="center">
                    <td>11:40 to 12:30</td>
                    <td colSpan={5} align="center">LUNCH BREAK</td>
                </tr>
                <tr align="center">
                    <td>12:30 to 1:20</td>
                    <td rowSpan={2}>PD(LIB)</td>
                    <td rowSpan={2}>PD(DS)</td>
                    <td rowSpan={2}>PD(LIB)</td>
                    <td rowSpan={2}>.NET(BD)</td>
                    <td rowSpan={2}>.NET(LIB)</td>
                </tr>
                <tr align="center">
                    <td>1:20 to 2:10</td>
                </tr>
                <tr align="center">
                    <td>class/lab location</td>
                    <td>214</td>
                    <td>118</td>
                    <td>214</td>
                    <td>LL3</td>
                    <td>LL5</td>
                </tr>
            </table>
        
        );
    }
}
export default Timetable;