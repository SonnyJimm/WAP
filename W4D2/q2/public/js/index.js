$(() => {
  $("#question").submit(onSubmit);
});

function onSubmit(e) {
  e.preventDefault();
  let question = $("#q").val();
  fetch(`http://localhost:3000/8ball?question=${question}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .then(onSuccess)
    .catch(onError);
    $("#q").focus().select()
}

const onSuccess = ({ answer }) => {
  $("#answer").text(answer);
};
const onError = (error) => {
  console.log(error);
  $("#answer").text("error occured");
};
