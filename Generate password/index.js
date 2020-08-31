let vm = new Vue({
  el: "#app",
  data: {
    password: "密码显示框",
    length: 14,
    openNum: true,
    openLowCase: true,
    openUpperCase: false,
    openSym: false,
    copyText: "点击复制",
    icon: true,
    //密码数组
    numArr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowCaseArr: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    upperCaseArr: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    symArr: ["_", "-", "$", "%", "&", "@", "+", "!"],
  },
  computed: {
    randomFuncArr() {
      let funcArr = [];
      if (this.openNum) {
        funcArr.push("getRandomNum");
      }
      if (this.openLowCase) {
        funcArr.push("getRandomLowCase");
      }
      if (this.openUpperCase) {
        funcArr.push("getRandomUpperCase");
      }
      if (this.openSym) {
        funcArr.push("getRandomSym");
      }
      return funcArr;
    },
  },
  methods: {
    getRandomRange(min, max) {
      //随机生成的整数
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomNum() {
      let index = this.getRandomRange(0, this.numArr.length - 1);
      return this.numArr[index];
    },
    getRandomLowCase() {
      let index = this.getRandomRange(0, this.lowCaseArr.length - 1);
      return this.lowCaseArr[index];
    },
    getRandomUpperCase() {
      let index = this.getRandomRange(0, this.upperCaseArr.length - 1);
      return this.upperCaseArr[index];
    },
    getRandomSym() {
      let index = this.getRandomRange(0, this.symArr.length - 1);
      return this.symArr[index];
    },
    //生成随机密码
    getRandomPass() {
      this.copyText = "点击复制";
      this.icon = true;
      //判断随机函数池是否为空
      if (this.randomFuncArr.length === 0) {
        alert("请至少选择一个参数");
        return;
      }
      //生成随机函数
      let passwordArr = [];
      for (let i = 0; i < this.length; i++) {
        //选择一个随机函数
        let index = this.getRandomRange(0, this.randomFuncArr.length - 1);
        let randomFunc = this.randomFuncArr[index];
        let randomValue = this[randomFunc]();
        passwordArr.push(randomValue);
      }
      this.password = passwordArr.join("");
    },
    //开启关闭选项
    isNumber() {
      this.openNum = !this.openNum;
    },
    isLowCase() {
      this.openLowCase = !this.openLowCase;
    },
    isUpperCase() {
      this.openUpperCase = !this.openUpperCase;
    },
    isSym() {
      this.openSym = !this.openSym;
    },
    copy() {
      document.querySelector("#password-copy").select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.copyText = "复制成功";
      this.icon = false;
    },
  },
  mounted() {},
});
