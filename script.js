$.ajax({
  url: "staff_ieee.json",
  success: (res) => {
    let staffLulus = res;
    $("#form").on("submit", (e) => {
      e.preventDefault();
      let lulus = document.querySelector(".lulus"),
        gagal = document.querySelector(".gagal"),
        btnLoading = document.querySelector(".btn-loading"),
        btnKirim = document.querySelector(".btn-kirim");
      for (let i = 0; i < staffLulus.length; i++) {
        if ($(".nrp").val() == staffLulus[i]["NRP"]) {
          btnKirim.classList.toggle("d-none");
          btnLoading.classList.toggle("d-none");
          if (staffLulus[i]["Position"] != "none") {
            setTimeout(() => {
              lulus.classList.toggle("d-none");
              document.querySelector(".jumbotron").classList.toggle("d-none");
            }, 3000);
          } else {
            setTimeout(() => {
              gagal.classList.toggle("d-none");
              document.querySelector(".jumbotron").classList.toggle("d-none");
            }, 3000);
          }
          return;
        }
      }
      alert("Your NRP is not available");
      $("#form").trigger("reset");
    });
  },
  error: (err) => {
    console.log(err);
  },
});
