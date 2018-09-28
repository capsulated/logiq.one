<script>
  import { Bar } from 'vue-chartjs'

  export default {
    props: ['data', 'labels'],
    extends: Bar,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            label: 'Количество появлений',
            backgroundColor: '#41b883',
            data: this.data
          }
        ]
      })
    }
  }
</script>
