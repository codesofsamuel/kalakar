function searchCreators() {
  const query = document.getElementById('creatorSearch').value.trim();
  if (!query) {
    alert('Please enter a creator name to search.');
    return;
  }
  alert(`Searching for creators: "${query}"`);
  // later add real search logic here
}
