import { ref } from 'vue'

export default {
  pageInfo: ref({ page: 0, pageSize: 10, total: 0 }),
  getBlogList({ page, pageSize }) {
    const tmp = []
    for (let i = 0; i < pageSize; i++) {
      tmp.push({
        title: `This is page title ${page * pageSize + i + 1}`,
        subTitle: `This is sub title ${page * pageSize + i + 1}`,
        summary: (page * pageSize + i + 1) + ': Spring Cloud Alibaba provides a one-stop solution for distributed ' +
          'application development. It contains all the components required to develop distributed applications, ' +
          'making it easy for you to develop your applications using Spring Cloud...',
        author: `author_${page * pageSize + i + 1}`,
        time: new Date().getTime(),
        tags: [ 'tag_1', 'tag_2' ],
        withBg: ''
      })
    }
    return tmp
  }
}