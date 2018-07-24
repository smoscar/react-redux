import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
	componentWillMount(){
		this.props.fetchPosts()
	}
	
	render(){
		const postItems = this.props.posts.map( (post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		))
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.is_required,
	posts: PropTypes.array.is_required
}

const mapStateToProps = (state) => ({
	posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
