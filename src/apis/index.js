import fetch from "@/utils/http";

export function getPlatInvest(data) {
  return fetch({
    url: "/invest/plat",
    method: "get",
    data
  });
}

export function getUserInvest(data) {
  if (data) {
    return fetch({
      url: `/invest/personal/${data}`,
      method: "get"
    });
  }
}
