var d = new Date();
var time = d.getHours();

if (time>=0&&time<=11) {
  document.write("Selamat pagi");
}
if (time>=12&&time<=14) {
  document.write("Selamat siang");
}
if (time>=15&&time<=17) {
  document.write("Selamat sore");
}
if (time>=18&&time<=23) {
  document.write("Selamat malam");
}