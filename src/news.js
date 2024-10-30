// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import "./mystyle.css"


// const Content = styled.div``;

// const Main = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 28px;
//   color: black;
//   box-shadow: 1px 10px 10px;
//   border: black 2px solid;
// `;

// const Head = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Side = styled.div`
// position: related;
// background-color: black;
//   font-family: Verdana, sans-serif;
//   font-size: 16px;
//   color: gray;`

// //   @keyframes Side {
// //     0% {
// //       transform: translateX(100%);
// //     }
// //     100% {
// //       transform: translateX(-100%);
// //     }
// //   }


// const Cont = styled.div`
// position: related;
// display: flex;
// justify-content: center;
// `

// export default function News() {
//     const [data, setData] = useState([]);
//     const [time, setTime] = useState('');

//     useEffect(() => {
//         const updateIndiaTime = () => {
//             const options = {
//                 timeZone: 'Asia/Kolkata',
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 second: '2-digit'
//             };
//             const indiaTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
//             setTime(indiaTime);
//         };

//         // Update time immediately on component load
//         updateIndiaTime();

//         // Update time every second
//         const intervalId = setInterval(updateIndiaTime, 1000);

//         // Clear interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []);

//     useEffect(() => {
//         fetch(
//             "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90e899bc53f940bca0fedc4b34b0ffbd",
//             {
//                 method: "GET",
//             }
//         )
//             .then((res) => res.json())
//             .then((resp) => {
//                 setData(resp.articles);
//                 console.log(resp.articles);
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         <div className="container">
//             <Content>
//                 <Main>
//                     <h1 style={{ color: `grey` }}>NewsTimes</h1>
//                 </Main>
//             </Content>
//             <Head>
//                 <h3>INDIA: {time}</h3>
//                 <p></p>

//             </Head>
//             {/* <Side>
//                 <p style={{ justifyContent: `center`, display: `flex` }}>Top News</p>
//             </Side> */}
//             <div class="marquee-container">
//                 <span class="marquee-text">Top News</span>
//             </div>
//             <Cont>
//                 <div className="container">
//                     <table className="table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Title</th>
//                                 <th>Author</th>
//                                 <th>Published At</th>
//                                 <th>Description</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.title}</td>
//                                     <td>{item.author || 'N/A'}</td>
//                                     <td>{new Date(item.publishedAt).toLocaleString()}</td>
//                                     <td>{item.description || 'No description available'}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </Cont>
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./mystyle.css";

const Content = styled.div`
  margin: 20px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: #2c3e50; /* Darker text color for professionalism */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border: 2px solid #2980b9; /* Soft blue border */
  border-radius: 10px; /* Rounded edges */
  background-color: #ecf0f1; /* Light background */
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  color: #34495e; /* Softer text color */
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background-color: #2980b9; /* Soft blue */
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.05em; /* Slight letter spacing */
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d6eaf8; /* Soft hover effect */
  }
`;

const MarqueeContainer = styled.div`
  background-color: #2980b9; /* Same blue as header */
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #2980b9; /* Main accent color */
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif; /* Consider using a web-safe font */
`;

export default function News() {
    const [data, setData] = useState([]);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateIndiaTime = () => {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };
            const indiaTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
            setTime(indiaTime);
        };

        updateIndiaTime(); // Update time immediately on component load
        const intervalId = setInterval(updateIndiaTime, 1000); // Update time every second

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90e899bc53f940bca0fedc4b34b0ffbd"
        )
            .then((res) => res.json())
            .then((resp) => {
                setData(resp.articles);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="container">
            <Content>
                <Main>
                    <Title>NewsTimes</Title>
                </Main>
            </Content>
            <Head>
                <h3>Current Time in India: {time}</h3>
            </Head>
            <MarqueeContainer>
                Top News
            </MarqueeContainer>
            <Cont>
                <div className="container">
                    <Table className="table-bordered">
                        <thead>
                            <tr>
                                <TableHeader>Title</TableHeader>
                                <TableHeader>Author</TableHeader>
                                <TableHeader>Published</TableHeader>
                                <TableHeader>Description</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.author || 'N/A'}</TableCell>
                                    <TableCell>{new Date(item.publishedAt).toLocaleString()}</TableCell>
                                    <TableCell>{item.description || 'No description available'}</TableCell>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Cont>
        </div>
    );
}
