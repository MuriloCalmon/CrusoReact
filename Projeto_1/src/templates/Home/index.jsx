import { Component } from 'react'

import './styles.css'

import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 4,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state

    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postPerPage
    const nexPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nexPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts

    return (
      <section className="container">

      <div className='search-container' >
        {!!searchValue && (
          <h1>Search: {searchValue}</h1>
        )}

        <TextInput searchValue={searchValue} handleChange={this.handleChange} />

        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}


        <div className='button_container' >
          {!searchValue && (
            <Button
              text={'Load more posts'}
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />)}

        </div>
      </section>
    )
  }
}

/* function App() {

} */