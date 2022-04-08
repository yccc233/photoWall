const imgPre = "/photowall/img/"

export function reducer(
    state = {
        imgs: [
            imgPre + "IMG_2195.jpeg",
            imgPre + "IMG_2205.jpeg",
            imgPre + "IMG_2251.jpeg",
            imgPre + "IMG_2254.jpeg",
            imgPre + "IMG_2261.jpeg",
            imgPre + "IMG_2510.jpeg",
            imgPre + "IMG_2623.jpeg",
        ],
        titles: [
            "照片集",
            "照片集",
            "照片集",
            "照片集",
            "照片集",
            "照片集",
            "照片集",
        ],
        descs: [
            "描述啊",
            "描述啊",
            "描述啊",
            "描述啊",
            "描述啊",
            "描述啊",
            "描述啊",
        ]
    },
    action
) {
  switch (action.type) {
      default:
          return state;
  }
}
