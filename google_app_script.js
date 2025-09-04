// This function handles the main POST request from your form
function doPost(e) {
  // --- Step 1: Define CORS headers ---
  // This tells the browser that requests from ANY origin ('*') are allowed.
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  try {
    const data = JSON.parse(e.postData.contents);
    
    if (!data.name || !data.phone) {
      throw new Error('Name and phone are required');
    }
    
    // --- Get the spreadsheet by ID to make the script more robust ---
    const SPREADSHEET_ID = "1jYC7z8yYsCDvBrNMW3tsKdfq86tNzaK1YZrTrfR16pw"; // <-- PASTE YOUR SPREADSHEET ID HERE
    const SHEET_NAME = "leads"; // <-- CHANGE IF YOUR SHEET HAS A DIFFERENT NAME
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(["Name", "Phone", "Timestamp", "Status", "Notes"]);
    }
    
    const timestamp = new Date();
    const row = [
      data.name,
      data.phone,
      timestamp.toLocaleString('en-GB', {timeZone: 'Asia/Dhaka'}),
      'New Lead',
      'Pending Contact'
    ];
    
    sheet.appendRow(row);
    
    // --- Step 2: Return a success response WITH the CORS headers ---
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
  } catch (error) {
    // --- Also return an error response WITH the CORS headers ---
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// --- Step 3: Handle the "preflight" OPTIONS request ---
// This function is CRITICAL for fixing the CORS error.
function doOptions(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '3600' // Optional: caches the preflight response for 1 hour
  };
  
  return ContentService
    .createTextOutput('')
    .setHeaders(headers);
}

// You can use this to test if the script is deployed and accessible
function doGet(e) {
  return ContentService.createTextOutput('The script is running!');
}