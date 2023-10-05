// import { UpdateCheapestFlightsAnywhere, models } from "@teamkeel/sdk";
// import fetch from "node-fetch";

// // Show random destinations for now
// const randomDestinationEntityIds = [
//   "29475383",
//   "29475385",
//   "29475229",
//   "29475260",
//   "29475381",
//   "29475369",
//   "29475373",
//   "29475389",
//   "29475349",
// ];

// export default UpdateCheapestFlightsAnywhere(async (ctx) => {
//   const res = await fetch(
//     "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create",
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         "x-api-key": ctx.secrets.SKYSCANNER_PUBLIC_KEY,
//       },
//       body: JSON.stringify({
//         query: {
//           market: "UK",
//           locale: "en-GB",
//           currency: "GBP",
//           queryLegs: [
//             {
//               originPlaceId: {
//                 entityId: "29475375",
//               },
//               destinationPlaceId: {
//                 entityId: "29475383",
//               },
//               date: {
//                 year: 2023,
//                 month: 8,
//                 day: 25,
//               },
//             },
//           ],
//           cabinClass: "CABIN_CLASS_UNSPECIFIED",
//           adults: 1,
//           nearbyAirports: true,
//         },
//       }),
//     }
//   );

//   if (!res.ok) {
//     throw new Error(`Failed to fetch. Status: ${res.status}`);
//   }

//   let results;
//   const contentType = res.headers.get("Content-Type");
//   if (contentType && contentType.includes("application/json")) {
//     results = await res.json();
//   } else {
//     results = await res.text();
//   }

//   console.log({ results });
// });
