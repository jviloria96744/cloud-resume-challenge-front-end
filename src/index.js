window.onload = () => {
  const getVisitCount = async (website) => {
    let url = "https://lcu3dxdmo1.execute-api.us-west-2.amazonaws.com/Prod";
    const response = await fetch(`${url}/visit_count`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Website: website,
      }),
    });
    return response.json();
  };

  getVisitCount("Cloud Resume Challenge")
    .then((res) => {
      document.getElementById("counter").innerHTML = String(res.count).padStart(
        6,
        "0"
      );
    })
    .catch((e) => {
      console.log(e);
    });
};
