<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Количество появлений',
            backgroundColor: '#41b883',
            data: [5, 20, 40, 39, 15, 40]
          }
        ]
      })
    }
  }
</script>
