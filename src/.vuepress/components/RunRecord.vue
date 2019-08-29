<template>
  <div>
    <table id="table">
      <thead>
        <th v-for="th of header_columns">{{ th.text }}</th>
      </thead>
      <tbody>
        <tr v-for="item in data_list">
          <td v-for="th of header_columns">{{ th.val === 'speed' ? `${item[th.val][0]}’${item[th.val][1]}’’` : item[th.val]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      header_columns: [
        { text: "日期", val: "date" },
        { text: "时间", val: "time" },
        { text: "距离(KM)", val: "distance" },
        { text: "配速", val: "speed" }
      ],
      datas: [
        {
          date: "19-7-17",
          time: "39分 23秒",
          distance: "5.01",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-7-16",
          time: "30分 05秒",
          distance: "5.03",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-7-14",
          time: "30分 47秒",
          distance: "5.02",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-7-8",
          time: "45分 22秒",
          distance: "6.00",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-6-27",
          time: "29分 23秒",
          distance: "5.03",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-6-24",
          time: "28分 20秒",
          distance: "5.03",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-6-19",
          time: "58分 58秒",
          distance: "10.04",
          speed: "5分 52秒 390毫秒"
        },
        {
          date: "19-6-17",
          time: "31分 17秒",
          distance: "5.44",
          speed: "5分 45秒 37毫秒"
        },
        {
          date: "19-6-16",
          time: "39分 36秒",
          distance: "5.02",
          speed: "5分 45秒 37毫秒"
        },
        {
          date: "19-6-13",
          time: "29分 18秒",
          distance: "5.01",
          speed: "5分 50秒 898毫秒"
        },
        {
          date: "19-6-9",
          time: "26分 26秒",
          distance: "5.01",
          speed: "5分 16秒 567毫秒"
        },
        {
          date: "19-6-3",
          time: "35分 53秒",
          distance: "6.05",
          speed: "5分 55秒 868毫秒"
        },
        {
          date: "19-6-1",
          time: "47分 37秒",
          distance: "5.05",
          speed: "9分 25秒 743毫秒"
        },
        {
          date: "19-6-1",
          time: "28分 6秒",
          distance: "5.01",
          speed: "5分 36秒 527毫秒"
        },
        {
          date: "19-5-31",
          time: "35分 10秒",
          distance: "6.02",
          speed: "5分 50秒 498毫秒"
        },
        {
          date: "19-5-29",
          time: "26分 26秒",
          distance: "4.58",
          speed: "5分 46秒 288毫秒"
        },
        {
          date: "19-5-28",
          time: "35分 29秒",
          distance: "6.01",
          speed: "5分 54秒 243毫秒"
        },
        {
          date: "19-5-20",
          time: "34分 0秒",
          distance: "6.03",
          speed: "5分 38秒 308毫秒"
        },
        {
          date: "19-5-19",
          time: "36分 52秒",
          distance: "6.03",
          speed: "6分 6秒 833毫秒"
        },
        {
          date: "19-5-17",
          time: "47分 16秒",
          distance: "6.04",
          speed: "7分 49秒 536毫秒"
        },
        {
          date: "19-5-10",
          time: "33分 42秒",
          distance: "6.01",
          speed: "5分 36秒 439毫秒"
        },
        {
          date: "19-5-9",
          time: "27分 46秒",
          distance: "2.72",
          speed: "10分 12秒 500毫秒"
        },
        {
          date: "19-5-8",
          time: "36分 11秒",
          distance: "6.03",
          speed: "6分 0秒 33毫秒"
        },
        {
          date: "19-5-7",
          time: "37分 0秒",
          distance: "6.06",
          speed: "6分 6秒 337毫秒"
        },
        {
          date: "19-5-6",
          time: "39分 53秒",
          distance: "6.03",
          speed: "6分 36秒 849毫秒"
        },
        {
          date: "19-5-4",
          time: "24分 26秒",
          distance: "3.69",
          speed: "6分 37秒 290毫秒"
        },
        {
          date: "19-5-3",
          time: "52分 50秒",
          distance: "7.02",
          speed: "7分 31秒 567毫秒"
        },
        {
          date: "19-4-21",
          time: "71分 58秒",
          distance: "10.30",
          speed: "6分 59秒 223毫秒"
        },
        {
          date: "19-4-19",
          time: "35分 53秒",
          distance: "6.03",
          speed: "5分 57秒 48毫秒"
        },
        {
          date: "19-4-17",
          time: "35分 55秒",
          distance: "6.03",
          speed: "5分 57秒 380毫秒"
        },
        {
          date: "19-4-15",
          time: "38分 37秒",
          distance: "6.04",
          speed: "6分 23秒 609毫秒"
        },
        {
          date: "19-4-14",
          time: "39分 8秒",
          distance: "6.38",
          speed: "6分 8秒 25毫秒"
        },
        {
          date: "19-4-11",
          time: "36分 51秒",
          distance: "6.05",
          speed: "6分 5秒 455毫秒"
        },
        {
          date: "19-4-10",
          time: "36分 36秒",
          distance: "6.01",
          speed: "6分 5秒 391毫秒"
        },
        {
          date: "19-4-8",
          time: "37分 39秒",
          distance: "6.05",
          speed: "6分 13秒 388毫秒"
        },
        {
          date: "19-4-7",
          time: "72分 33秒",
          distance: "10.20",
          speed: "7分 6秒 765毫秒"
        },
        {
          date: "19-4-6",
          time: "46分 1秒",
          distance: "6.03",
          speed: "7分 37秒 877毫秒"
        },
        {
          date: "19-4-5",
          time: "68分 38秒",
          distance: "10.21",
          speed: "6分 43秒 330毫秒"
        },
        {
          date: "19-4-3",
          time: "39分 57秒",
          distance: "7.05",
          speed: "5分 40秒 0毫秒"
        },
        {
          date: "19-4-2",
          time: "36分 18秒",
          distance: "5.00",
          speed: "7分 15秒 600毫秒"
        },
        {
          date: "19-4-1",
          time: "39分 7秒",
          distance: "6.00",
          speed: "6分 31秒 167毫秒"
        },
        {
          date: "19-3-17",
          time: "146分 7秒",
          distance: "21.68",
          speed: "6分 44秒 382毫秒"
        },
        {
          date: "19-3-12",
          time: "30分 0秒",
          distance: "5.04",
          speed: "5分 57秒 143毫秒"
        },
        {
          date: "19-3-11",
          time: "29分 4秒",
          distance: "5.11",
          speed: "5分 41秒 292毫秒"
        },
        {
          date: "19-3-9",
          time: "29分 15秒",
          distance: "5.18",
          speed: "5分 38秒 803毫秒"
        },
        {
          date: "19-3-4",
          time: "32分 22秒",
          distance: "5.04",
          speed: "6分 25秒 317毫秒"
        },
        {
          date: "19-2-25",
          time: "29分 40秒",
          distance: "5.01",
          speed: "5分 55秒 289毫秒"
        },
        {
          date: "19-2-24",
          time: "35分 22秒",
          distance: "5.65",
          speed: "12分 40秒 893毫秒"
        },
        {
          date: "19-2-24",
          time: "39分 0秒",
          distance: "6.03",
          speed: "6分 28秒 60毫秒"
        },
        {
          date: "19-2-8",
          time: "37分 16秒",
          distance: "6.01",
          speed: "6分 12秒 47毫秒"
        },
        {
          date: "19-2-5",
          time: "39分 54秒",
          distance: "6.03",
          speed: "6分 37秒 15毫秒"
        },
        {
          date: "19-2-2",
          time: "31分 9秒",
          distance: "5.02",
          speed: "6分 12秒 311毫秒"
        },
        {
          date: "19-1-16",
          time: "33分 41秒",
          distance: "6.01",
          speed: "5分 36秒 273毫秒"
        },
        {
          date: "19-1-13",
          time: "41分 19秒",
          distance: "6.03",
          speed: "6分 51秒 111毫秒"
        },
        {
          date: "19-1-6",
          time: "71分 4秒",
          distance: "10.00",
          speed: "7分 6秒 400毫秒"
        }
      ]
    };
  },
  mounted() {},
  computed: {
    data_list() {
      let arrs = this.datas;
      arrs.forEach(arr => {
        let minute = arr.time.split("分")[0];
        let second = arr.time.split(" ")[1].split("秒")[0];
        arr.speed = this.calSpeed({distance:arr.distance,minutes:minute,seconds:second,hours:0})
      });
      return arrs;
    }
  },
  methods: {
    calSpeed: data => {
      const { distance, hours, minutes, seconds } = data;
      var speed, speed_minutes, speed_seconds;
      speed =
        parseFloat(hours) * 60 +
        parseFloat(minutes) +
        parseFloat(seconds) / 60.0;
      speed = speed / parseFloat(distance);
      speed_minutes = Math.floor(speed);
      speed_seconds = Math.floor((speed - speed_minutes) * 60.0);
      return `${speed_minutes}' ${speed_seconds}''`; 
    }
  }
};
</script>
<style>
/* Table Head */
#table thead th {
  background-color: rgb(81, 130, 187);
  color: #fff;
  border-bottom-width: 0;
}

/* Column Style */
#table td {
  color: #000;
}
/* Heading and Column Style */
#table tr,
#table th {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(81, 130, 187);
}

/* Padding and font style */
#table td,
#table th {
  padding: 5px 10px;
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}
</style>
