export const isValidTextMessage = (message) => {
    message = message.trim();
    if (message.length === 0 || message.length > 200) {
      return false;
    }
    return true;
}

export const getFormattedDate = () =>{
    const date = new Date();
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
  }
  