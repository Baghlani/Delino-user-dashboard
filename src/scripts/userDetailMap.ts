import { User } from "./types/User.interface";

export default async (e: any) => {
  await import("@progress/kendo-ui/esm/kendo.dataviz.map");
  const user = e.data as unknown as User;
  $(e.detailCell as any)
    .find(`#map${user.id}`)
    .kendoMap({
      center: [parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)],
      zoom: 3,
      layers: [
        {
          type: "tile",
          urlTemplate: "https://#=subdomain#.tile.openstreetmap.org/#=z#/#=x#/#=y#.png",
          subdomains: ["a", "b", "c"],
          attribution: "&copy; <a href='https://osm.org/copyright'>OpenStreetMap contributors</a>",
        },
      ],
      markers: [
        {
          location: [parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)],
          shape: "pinTarget",
          tooltip: {
            content: user.name,
          },
        },
      ],
    });
};
