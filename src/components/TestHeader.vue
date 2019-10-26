<template>
  <div class="test-header mb-5">
    <h2>Memilih yang {{ type }}</h2>
    <p>
      Pilih 5 sampai 7 aktivitas di bawah yang {{ type }}. <br />
      Kalau sudah klik NEXT ya!
    </p>
  </div>
</template>

<script>
export default {
  name: "TestHeader",
  props: ["number", "type"]
}
</script>