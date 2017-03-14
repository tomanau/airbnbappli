
class Api {


  getRoom(roomId, callback) {
    fetch(`${Config.host}/api/room/${roomId}`)
      .then(res => res.json())
        .then((json) => {
          callback(json);
      });
  }

  export default new Api();
