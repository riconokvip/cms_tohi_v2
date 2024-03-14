export const dayConverter = (dateTime) => {
    const date = new Date(dateTime);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false 
    };
    date.setHours(date.getHours() + 7);
    const finalTime = date.toLocaleString("en-US", options);
    return finalTime;
  };

  export function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  export const formatNumber = (number) => {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(3) + ' tỷ';
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(3) + ' triệu';
    }else if (number >= 1e3) {
      return (number / 1e3).toFixed(3) + ' K';
    }
    else {
      return number.toLocaleString();
    }
  };