package com.socialnetwork.SocialNetWork.service;

import com.socialnetwork.SocialNetWork.entity.Media;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MediaService {
    public List<Media> getListImageMedia(String id , String limit);
    public Media addMedia(Media media);
}