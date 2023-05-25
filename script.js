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
              document.querySelector(
                ".pesan-lolos"
              ).innerHTML = `Hi ${staffLulus[i]["Nama"]}, you are selected to be the part of us. Also join our Welcome Party at Papercup Manyar on 29th Mei 2023 at 07:00 P.M`;
            }, 3000);
          } else {
            setTimeout(() => {
              gagal.classList.toggle("d-none");
              document.querySelector(".jumbotron").classList.toggle("d-none");
              document.querySelector(
                ".pesan-gagal"
              ).innerHTML = `Sorry ${staffLulus[i]["Nama"]} ! You are declared not passed to become IEEE staff. Keep the
              spirit and good luck on another occasion`;
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
