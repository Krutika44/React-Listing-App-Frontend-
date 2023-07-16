import React from 'react';
import './ListingDetail.css';

function ListingDetail() {
  return (
    <div className='listing-detail'>
        <div className='listing-detail-content'>
        <img className='listing-detail-img' src="https://images.pexels.com/photos/365633/pexels-photo-365633.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
            <h1 className='listing-detail-title'> 
                Awesome Property 
                <div className='listing-detail-action'>
                    <i className='listing-detail-action-icon fas fa-edit'></i>
                    <i className='listing-detail-action-icon fas fa-trash-alt'></i>
                </div>
            </h1>
            
            <div className='listing-detail-meta-info'>
                <span className='listing-detail-author'>Author- <strong>John Doe</strong></span>
                <span className='listing-detail-time'>1 day ago</span>
            </div>
            <p className='listing-detail-description'>
            Whether you aspire to build a tech startup, launch a retail business, or become a consultant in your field of expertise, the Entrepreneur's Toolkit website provides a wealth of information and guidance tailored to your specific industry and business type. We understand that each entrepreneurial journey is unique, and our website caters to a diverse range of interests and aspirations.

One of the primary features of our website is the comprehensive business planning resources we offer. A well-crafted business plan serves as the foundation of any successful business. We provide you with templates, guidelines, and examples to help you develop a robust plan that outlines your vision, mission, target market, competitive analysis, marketing strategies, financial projections, and more. By leveraging our resources, you can effectively articulate your business concept and develop a roadmap for achieving your goals.

To ensure that you navigate the startup process smoothly, our website offers step-by-step guidance. We break down the journey into manageable stages, addressing key areas such as legal considerations, market research, product development, funding options, branding, and sales strategies. Each step is accompanied by practical tips, best practices, and real-life case studies that illustrate how successful entrepreneurs have tackled similar challenges. By following our systematic approach, you can confidently progress through each stage and minimize potential pitfalls.

The Entrepreneur's Toolkit website also provides a platform for you to connect with experienced entrepreneurs and industry experts. Our curated articles, interviews, and forums give you access to a wealth of knowledge and insights from those who have already achieved success in their respective fields. Engage in discussions, ask questions, and benefit from the wisdom and expertise of individuals who have faced and overcome the challenges you may encounter on your entrepreneurial journey.
            </p>
        </div>
    </div>
  )
}

export default ListingDetail