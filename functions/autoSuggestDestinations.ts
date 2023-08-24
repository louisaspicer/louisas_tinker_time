import { AutoSuggestDestinations } from "@teamkeel/sdk";
import fetch from "node-fetch";

export default AutoSuggestDestinations(async (ctx, inputs) => {
  const res = await fetch(
    "https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights	",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": ctx.secrets.SKYSCANNER_PUBLIC_KEY,
      },
      body: JSON.stringify({
        query: {
          market: "UK",
          locale: "en-GB",
          searchTerm: inputs.destination,
        },
      }),
    }
  );

  console.log({ res });

  if (!res.ok) {
    throw new Error(`Failed to fetch. Status: ${res.status}`);
  }

  let results;
  const contentType = res.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    results = await res.json();
  } else {
    results = await res.text();
  }

  console.log("placesss", results.places[0]);

  if (!results) {
    return null;
  }

  return results.places.map((place) => {
    return {
      entityId: place.entityId,
      name: place.name,
      iataCode: place.iataCode,
      countryId: place.countryId,
      countryName: place.countryName,
      cityName: place.cityName,
      location: place.location,
      hierarchy: place.hierarchy,
      type: place.type,
    };
  });
});
