$(() => {
  $(".addToCart").submit(onSubmit);
});

function onSubmit(e) {
  e.preventDefault();
  let data = $(this).children("input[name='id']").val();
  let formData = new FormData();
  formData.append("id", data);
  fetch(`http://localhost:3000/add_to_cart`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: data }),
    method: "post",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .then(onSuccess)
    .catch(onError);
}

const onSuccess = () => {
  console.log("added successfully");
};
const onError = (error) => {
  console.log(error);
  $("#answer").text("error occured");
};
