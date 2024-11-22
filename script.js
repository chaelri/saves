// const apiKey = "<YOUR_API_KEY>"; // Replace with your API Key
// const spreadsheetId = "<YOUR_SPREADSHEET_ID>"; // Replace with your Spreadsheet ID
// const range = "Sheet1!A1"; // Cell to update (e.g., A1)

// const button = document.getElementById("counterButton");
// const responseElement = document.getElementById("response");

// // Function to get the current value
// async function getCurrentValue() {
//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return parseInt(data.values[0][0] || "0", 10);
// }

// // Function to update the cell value
// async function updateValue(newValue) {
//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?valueInputOption=RAW&key=${apiKey}`;
//   const body = {
//     range: range,
//     majorDimension: "ROWS",
//     values: [[newValue]],
//   };

//   const response = await fetch(url, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });

//   if (response.ok) {
//     responseElement.textContent = `Updated to ${newValue}`;
//   } else {
//     responseElement.textContent = "Error updating the value";
//   }
// }

// // Button click handler
// button.addEventListener("click", async () => {
//   try {
//     const currentValue = await getCurrentValue();
//     const newValue = currentValue + 1;
//     await updateValue(newValue);
//   } catch (error) {
//     responseElement.textContent = `Error: ${error.message}`;
//   }
// });
