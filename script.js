let count = 0;

function logHater() {
  const input = document.getElementById('haterName');
  const list = document.getElementById('haterList');
  const cash = document.getElementById('cashCounter');

  if (input.value.trim() !== "") {
    const li = document.createElement('li');
    li.innerHTML = `<span style="color:var(--neon-teal);">[LOG]:</span> ${input.value} added to receipts.`;
    list.prepend(li);

    count += 1.00;
    cash.textContent = `$${count.toFixed(2)}`;

    input.value = "";
    input.focus();
  }
}

function shareFB() {
  const url = window.location.href;
  const text = "I'm turning hate into profit. Sign the board here: ";
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
}
