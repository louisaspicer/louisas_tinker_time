import { test, expect } from "vitest";
import { actions, models } from "@teamkeel/testing";

test("fetch auto suggestions", async () => {
  const fetchedRecord = await actions.autoSuggestDestinations({
    destination: "london",
  });

  expect(fetchedRecord[0].cityName).toEqual("London");
});
