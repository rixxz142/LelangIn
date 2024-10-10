document.querySelectorAll('.btnDetail').forEach(item=>{
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let lastBid = parent.querySelector('.text-danger').innerHTML;
        let judul = parent.querySelector('.card-title').innerHTML;
        let desc = parent.querySelector('.card-text') ? parent.querySelector('.card-text').innerHTML : '<i>tidak ada informasi yang tesedia</i>';
        

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img') ;
        image.src = gambar;
        image.classList.add('w-70');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = desc;
        document.querySelector('.modalHarga').innerHTML = lastBid;

    });
});
// Tambahkan variabel countdownDate dan durationInMinutes
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7); // Menambah 7 hari
 // Ganti dengan tanggal akhir bidding
const durationInMinutes = 10080; // Ganti dengan durasi bidding dalam menit

// Fungsi untuk menghitung sisa waktu dan memperbarui tampilan countdown
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerText = "Bidding Closed";
    }
  };
  

// Fungsi untuk mengatur durasi bidding
// const setBiddingDuration = () => {
//   const hours = Math.floor(durationInMinutes / 60);
//   const minutes = durationInMinutes % 60;
//   document.getElementById("biddingDuration").innerText = hours + "h " + minutes + "m";
// };

// // Panggil fungsi setBiddingDuration untuk menginisialisasi durasi bidding
// setBiddingDuration();

// Panggil fungsi updateCountdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);


