import React, { useEffect, useState } from 'react'
import client from './../client';
import { Link, useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
                title,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then(data => setSinglePost(data[0]))
        setIsLoading(false);
    }, [slug]);


    return (
        <>
            {isLoading ? <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">Loading....</h1> :
                <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
                    <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 mt-5 md:text-6xl lg:text-8xl text-center">{singlePost.title}</h1>
                    {singlePost.mainImage && singlePost.mainImage.asset && (
                        <img src={singlePost.mainImage.asset.url} className="blog__image rounded-t" alt={singlePost.title} title={singlePost.title} />
                    )}
                    <p>By Simon Adama</p>
                    <div className="block__content">
                        <BlockContent blocks={singlePost.body} projectId="" dataset="production" />
                    </div>
                    <button>
                        <Link to='/blog' className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold">
                            Read more articles
                        </Link>
                    </button>
                </section>
            }
        </>
    )
}

export default SinglePost
