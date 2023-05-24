// const data = "data.json";

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// getDataMahasiswa("data.json", (result) => {
//   console.log(result);
// });

$.ajax({
  url: "staff_ieee.json",
  success: (res) => {
    let staffLulus = res;
    $("#form").on("submit", (e) => {
      e.preventDefault();
      for (let i = 0; i < staffLulus.length; i++) {
        if ($(".nrp").val() == staffLulus[i]["NRP"]) {
          console.log(`Selamat ${staffLulus[i]["Nama"]} anda dinyatakan lulus`);
          return;
        }
      }
      console.log("tidak lulus");
    });
  },
  error: (err) => {
    console.log(err);
  },
});
