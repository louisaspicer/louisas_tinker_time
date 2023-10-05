import { UnsetLocation, models } from "@teamkeel/sdk";

export default UnsetLocation(async (ctx, inputs) => {
  await models.itinerary.update({ id: inputs.id }, { locationId: null });

  await models.locationInfo.delete({ id: inputs.id });

  return {};
});

// import { UnsetLocation, UnsetLocationHooks, models } from "@teamkeel/sdk";

// const hooks: UnsetLocationHooks = {
//   afterWrite: async (ctx, inputs, data) => {
//     await models.locationInfo.delete({ id: inputs.where.id });
//   },
// };

// export default UnsetLocation(hooks);
