Search.setIndex({docnames:["Criterion","Data","Lr_scheduler","Metric","Model","Optim","Vocab","index","notes/intro"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["Criterion.rst","Data.rst","Lr_scheduler.rst","Metric.rst","Model.rst","Optim.rst","Vocab.rst","index.rst","notes/intro.md"],objects:{"lasr.criterion":{joint_ctc_cross_entropy:[0,0,0,"-"]},"lasr.criterion.joint_ctc_cross_entropy":{JointCTCCrossEntropyLoss:[0,1,1,""]},"lasr.criterion.joint_ctc_cross_entropy.JointCTCCrossEntropyLoss":{forward:[0,2,1,""]},"lasr.data":{data_loader:[1,0,0,"-"],dataset:[1,0,0,"-"],libri_preprocess:[1,0,0,"-"],lit_data_module:[1,0,0,"-"]},"lasr.data.data_loader":{AudioDataLoader:[1,1,1,""],BucketingSampler:[1,1,1,""]},"lasr.data.dataset":{AudioDataset:[1,1,1,""],FBankDataset:[1,1,1,""],MFCCDataset:[1,1,1,""],MelSpectrogramDataset:[1,1,1,""],SpectrogramDataset:[1,1,1,""]},"lasr.data.libri_preprocess":{collect_transcripts:[1,3,1,""],generate_manifest_file:[1,3,1,""],prepare_tokenizer:[1,3,1,""]},"lasr.data.lit_data_module":{LitLibriDataModule:[1,1,1,""]},"lasr.data.lit_data_module.LitLibriDataModule":{apply_spec_augment:[1,4,1,""],batch_size:[1,4,1,""],dataset_path:[1,4,1,""],frame_length:[1,4,1,""],frame_shift:[1,4,1,""],freq_mask_num:[1,4,1,""],freq_mask_para:[1,4,1,""],num_epochs:[1,4,1,""],num_mels:[1,4,1,""],num_workers:[1,4,1,""],prepare_data:[1,2,1,""],sample_rate:[1,4,1,""],test_dataloader:[1,2,1,""],time_mask_num:[1,4,1,""],train_dataloader:[1,2,1,""],val_dataloader:[1,2,1,""]},"lasr.metric":{ErrorRate:[3,1,1,""],WordErrorRate:[3,1,1,""]},"lasr.metric.WordErrorRate":{metric:[3,2,1,""]},"lasr.model":{activation:[4,0,0,"-"],attention:[4,0,0,"-"],convolution:[4,0,0,"-"],embedding:[4,0,0,"-"],encoder:[4,0,0,"-"],feed_forward:[4,0,0,"-"],modules:[4,0,0,"-"],recognizer:[4,0,0,"-"]},"lasr.model.activation":{GLU:[4,1,1,""],Swish:[4,1,1,""]},"lasr.model.activation.GLU":{forward:[4,2,1,""]},"lasr.model.activation.Swish":{forward:[4,2,1,""]},"lasr.model.attention":{MultiHeadAttention:[4,1,1,""],MultiHeadedSelfAttentionModule:[4,1,1,""],RelativeMultiHeadAttention:[4,1,1,""],ScaledDotProductAttention:[4,1,1,""]},"lasr.model.attention.MultiHeadAttention":{forward:[4,2,1,""]},"lasr.model.attention.MultiHeadedSelfAttentionModule":{forward:[4,2,1,""]},"lasr.model.attention.RelativeMultiHeadAttention":{forward:[4,2,1,""]},"lasr.model.attention.ScaledDotProductAttention":{forward:[4,2,1,""]},"lasr.model.convolution":{ConformerConvModule:[4,1,1,""],Conv2dSubampling:[4,1,1,""],DepthwiseConv1d:[4,1,1,""],PointwiseConv1d:[4,1,1,""]},"lasr.model.convolution.ConformerConvModule":{forward:[4,2,1,""]},"lasr.model.convolution.Conv2dSubampling":{forward:[4,2,1,""]},"lasr.model.convolution.DepthwiseConv1d":{forward:[4,2,1,""]},"lasr.model.convolution.PointwiseConv1d":{forward:[4,2,1,""]},"lasr.model.embedding":{PositionalEncoding:[4,1,1,""]},"lasr.model.embedding.PositionalEncoding":{forward:[4,2,1,""]},"lasr.model.encoder":{ConformerBlock:[4,1,1,""],ConformerEncoder:[4,1,1,""]},"lasr.model.encoder.ConformerBlock":{forward:[4,2,1,""]},"lasr.model.encoder.ConformerEncoder":{forward:[4,2,1,""]},"lasr.model.feed_forward":{FeedForwardModule:[4,1,1,""]},"lasr.model.feed_forward.FeedForwardModule":{forward:[4,2,1,""]},"lasr.model.modules":{LayerNorm:[4,1,1,""],Linear:[4,1,1,""],ResidualConnectionModule:[4,1,1,""],Transpose:[4,1,1,""],View:[4,1,1,""]},"lasr.model.modules.LayerNorm":{forward:[4,2,1,""]},"lasr.model.modules.Linear":{forward:[4,2,1,""]},"lasr.model.modules.ResidualConnectionModule":{forward:[4,2,1,""]},"lasr.model.modules.Transpose":{forward:[4,2,1,""]},"lasr.model.modules.View":{forward:[4,2,1,""]},"lasr.model.recognizer":{LitSpeechRecognizer:[4,1,1,""]},"lasr.model.recognizer.LitSpeechRecognizer":{configure_criterion:[4,2,1,""],configure_optimizers:[4,2,1,""],decay_steps:[4,4,1,""],final_lr:[4,4,1,""],final_lr_scale:[4,4,1,""],forward:[4,2,1,""],init_lr_scale:[4,4,1,""],lr_scheduler:[4,4,1,""],num_classes:[4,4,1,""],optimizer:[4,4,1,""],peak_lr:[4,4,1,""],teacher_forcing_ratio:[4,4,1,""],test_step:[4,2,1,""],training_step:[4,2,1,""],validation_step:[4,2,1,""],vocab:[4,4,1,""],warmup_steps:[4,4,1,""]},"lasr.optim":{adamp:[5,0,0,"-"],optimizer:[5,0,0,"-"],radam:[5,0,0,"-"]},"lasr.optim.adamp":{AdamP:[5,1,1,""]},"lasr.optim.adamp.AdamP":{step:[5,2,1,""]},"lasr.optim.lr_scheduler":{lr_scheduler:[2,0,0,"-"],transformer_lr_scheduler:[2,0,0,"-"],tri_stage_lr_scheduler:[2,0,0,"-"]},"lasr.optim.lr_scheduler.lr_scheduler":{LearningRateScheduler:[2,1,1,""]},"lasr.optim.lr_scheduler.transformer_lr_scheduler":{TransformerLRScheduler:[2,1,1,""]},"lasr.optim.lr_scheduler.tri_stage_lr_scheduler":{TriStageLRScheduler:[2,1,1,""]},"lasr.optim.optimizer":{Optimizer:[5,1,1,""]},"lasr.optim.radam":{RAdam:[5,1,1,""]},"lasr.optim.radam.RAdam":{step:[5,2,1,""]},"lasr.vocabs":{__init__:[6,0,0,"-"],librispeech:[6,0,0,"-"]},"lasr.vocabs.__init__":{Vocabulary:[6,1,1,""]},"lasr.vocabs.librispeech":{LibriSpeechVocabulary:[6,1,1,""]},lasr:{metric:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"001":5,"03762":2,"08779":2,"10000":4,"1706":2,"1904":2,"2020":5,"5000":1,"512":4,"999":5,"abstract":8,"case":1,"class":[0,1,2,3,4,5,6],"default":[0,4],"final":4,"float":[0,1,4],"function":[0,4,5],"import":[4,8],"int":[0,1,4,5,6],"new":8,"return":[1,4,5],"short":1,"true":[1,4,5,8],"while":[0,4],But:8,For:[1,8],The:[1,4,8],There:1,These:4,__init__:6,abil:8,abov:1,abs:2,adam:[4,5],adapt:5,add:[1,4],added:4,after:[2,3,4],afterward:[0,4],again:4,aid:4,align:4,all:[0,1,4,8],allow:4,also:[1,4],although:[0,4],ani:8,apach:5,appli:[1,4],applic:8,apply_spec_aug:1,appreci:8,arbitrari:1,area:1,arg:[1,4,6],argument:1,arxiv:2,asr:8,assign:1,assum:1,attend:4,attent:8,attention_dropout_p:4,attn:4,audio:1,audio_path:1,audiodataload:1,audiodataset:1,augment:1,author:7,avail:8,bank:1,batch:[1,4],batch_cifar:1,batch_idx:4,batch_mnist:1,batch_siz:1,batchnorm:4,befor:[4,8],below:8,beta:5,better:4,between:[1,3],beyond:[4,5],bia:4,bin:8,blank:0,blank_id:[0,4],block:4,bool:[1,4],both:4,bucketingsampl:1,bug:8,build:8,cach:8,calcuat:3,calcul:0,call:[0,1,4],callabl:5,can:[1,8],care:[0,4],challeng:4,channel:4,checkout:8,cifar:1,cifar_load:1,classif:[0,4],classs:5,clip:5,clone:8,closur:5,clovaai:5,cluster:8,coeffici:1,collabor:8,collect:1,collect_transcript:1,com:[5,8],command:8,complex:8,complic:8,compos:1,comput:[0,3,4],concat:4,concaten:4,concept:4,conda:8,config:[1,4],configur:[4,8],configuraion:[1,4],configure_criterion:4,configure_optim:4,conform:[4,8],conformerblock:4,conformerconvmodul:4,conformerencod:4,connect:4,consist:[4,8],contact:8,contain:4,context:4,contigu:4,contribut:7,control:8,conv1d:4,conv2dsubampl:4,conv_dropout_p:4,conv_expansion_factor:4,conv_kernel_s:4,convert:6,convolv:4,copi:5,copyright:5,core:8,corp:5,correct:[1,8],correspond:8,cos:4,cosin:4,could:8,cpp_ext:8,cpu:1,creat:8,criterion:[4,7],cross:0,cross_entropy_weight:[0,4],ctc:8,ctc_weight:[0,4],cuda:8,cuda_ext:8,current:8,d_head:4,d_model:4,data:[4,7],data_load:1,dataload:1,dataloader_idx:1,dataset:[6,8],dataset_download:8,dataset_path:[1,8],decai:[2,4],decay_step:[2,4],decod:8,decoder_log_prob:0,deep:4,deeper:4,def:1,defin:[0,3,4],degenerated_to_sgd:5,delta:5,depend:8,deploi:4,depthwis:4,depthwiseconv1d:4,detail:8,develop:8,dict:1,dictconfig:[1,4],differ:4,dim:[0,4],dimens:[0,4],dimension:4,dir:8,directli:[1,2,3,6],discuss:8,distanc:3,distribut:1,divid:4,docstr:8,document:8,domain:4,don:1,dot:4,down:5,download:1,dropout:4,dropout_p:4,dynam:8,each:[1,4],easi:8,ecognit:8,edit:3,either:1,emploi:[2,4],encod:8,encoder_dim:4,encoder_log_prob:0,entropi:0,env:8,environ:8,eos:1,eos_id:1,epoch:1,eps:[4,5],error:3,errorr:[3,4],especi:8,everi:[0,1,4],exactli:8,exampl:[1,8],expans:4,expansion_factor:4,exponeti:2,extrem:8,factor:4,fals:[1,4,5],familiar:8,fast:8,faster:8,fbankdataset:1,featur:[4,8],feed_forward:4,feed_forward_dropout_p:4,feed_forward_expansion_factor:4,feedback:8,feedforwardmodul:4,feel:8,field:5,file:[1,8],filter:1,final_lr:[2,4],final_lr_scal:[2,4],first:4,fit:1,fix:[4,8],flag:[1,4],floattensor:4,follow:[1,4,8],forc:4,forg:8,former:[0,4],forward:0,fourier:1,frame:1,frame_length:1,frame_shift:1,framework:8,free:8,freq:1,freq_mask_num:1,freq_mask_para:1,frequenc:4,from:[2,4,5],gate:4,gcc:8,gener:[1,4,8],generate_manifest_fil:1,get:7,git:8,github:[5,8],given:5,global:8,glu:4,gmail:8,gpu:8,grad:5,gradient:5,group:4,guidelin:8,half:4,half_step_residu:4,happen:1,hardwar:1,have:[1,8],head:4,head_1:4,head_h:4,head_i:4,help:4,here:[1,8],hierarch:8,high:8,higher:8,hold:2,hold_step:2,hook:[0,4],hop:1,hope:8,how:[1,8],howev:1,http:[2,5,8],hydra:8,hyper:1,identif:[0,1],ighthn:8,ignor:[0,4],ignore_index:[0,4],imag:4,implement:[1,2,8],improv:8,in_channel:4,in_featur:4,increas:2,index:[0,4,7],indic:[1,4],infer:4,inform:4,init_lr:2,init_lr_scal:[2,4],initi:4,input:4,input_dim:4,input_dropout_p:4,input_factor:4,input_length:4,inspir:4,instal:7,instanc:[0,4],instanti:5,instead:[0,4],intefac:[2,3],integ:4,integr:4,introduc:[4,8],introduct:7,invari:5,inverse_squre_root:2,issu:8,iter:[2,8],joint:8,joint_ctc_attent:4,joint_ctc_cross_entropi:0,jointctccrossentropyloss:0,jointli:4,just:4,k_len:4,keep:2,kei:4,kernel:4,kernel_s:4,kim:8,kind:8,kospeech:5,kwarg:[1,6],kwd:1,label:[4,6],languag:4,lasr:[0,1,2,3,4,5,6,8],latter:[0,4],layer:4,layernorm:4,learn:[2,4,5],learnabl:4,learningrateschedul:[2,4],length:[1,4],librari:[7,8],libri_preprocess:1,librispeech:[4,8],librispeechvocabulari:[4,6],librosa:8,licens:5,lightn:[4,8],lightweight:8,like:8,limit:1,linear:4,linearli:2,list:[1,4],lit_data_modul:1,literatur:4,litlibridatamodul:1,litspeechrecogn:4,liyuanlucasliu:5,load:8,loader_a:1,loader_b:1,loader_n:1,longtensor:4,loss:[4,5],lr_schedul:[2,4,5],lstm:8,macaron:4,machin:4,main:8,major:8,make:[1,4,8],mani:1,manifest:1,mask:[1,4],match:[1,4],max_grad_norm:5,max_len:4,mean:[0,8],measur:4,mechan:4,mel:1,melspectrogramdataset:1,method:[0,1],metric:[4,7],mfc:1,mfcc:1,mfccdataset:1,mhsa:4,might:8,mit:[5,8],mix:8,mnist:1,mnist_load:1,model:[5,6,7,8],model_path:6,modifi:5,modul:[0,7,8],module_factor:4,momentum:5,monoton:4,more:[1,4],most:5,multi:[4,8],multihead:4,multiheadattent:4,multiheadedselfattentionmodul:4,multipl:1,must:4,name:4,natur:4,naver:5,necessari:1,need:[0,1,4,8],nest:1,nesterov:5,net:4,network:4,non:4,none:[0,1,4,5],norm:[4,5],normal:[1,4],num_attention_head:4,num_class:[0,4],num_epoch:1,num_head:4,num_lay:4,num_mel:1,num_work:1,number:[0,1,4],numpi:8,nvidia:8,object:5,obtain:4,often:4,omegaconf:4,onc:[4,8],one:[0,1,2,3,4,6],onli:[1,8],open:8,oper:4,optim:[2,4,7],option:[4,5,8],order:[1,4],org:2,origin:4,otherwis:5,out_channel:4,out_featur:4,outperform:4,output:4,output_len:4,output_length:[0,4],overridden:[0,4],pad:4,page:[1,7],pair:4,paper:[4,5],param:5,paramet:[0,1,3,4,5,6],paramref:1,part:1,pass:[0,4],path:[1,6],pattern:1,pdf:2,pe_:4,peak:4,peak_lr:[2,4],peech:8,pep:8,perform:[0,4,5,8],pip:8,pleas:[1,8],pointwis:4,pointwiseconv1d:4,pos:4,pos_embed:4,posit:4,positionalencod:4,power:4,pre:4,precis:8,predict:4,prenorm:4,prepar:1,prepare_data:1,prepare_token:1,privid:0,probabl:4,problem:8,proce:8,process:[1,4],produc:4,product:4,project:[4,8],propag:4,propos:4,provid:[2,3,5,8],python:8,pytorch:[1,4,8],pytorch_lightn:1,q_len:4,queri:4,question:8,rate:[1,2,3,4,5],ratio:4,recip:[0,4],recognit:8,recommend:[1,8],recurr:4,reduct:0,reevalu:5,refer:[5,7,8],regist:[0,4],regular:4,rel:4,relativemultiheadattent:4,reload_dataloaders_every_epoch:1,relu:4,replac:4,report:8,represent:4,request:8,research:8,residu:4,residualconnectionmodul:4,result:4,retain:1,rnn:4,robust:4,root:1,run:[0,4,8],sampl:1,sample_r:1,sampler:1,sandwich:4,scalabl:8,scale:[4,5],scaleddotproductattent:4,schedul:[4,5,7],scheduler_period:5,scheme:4,search:7,see:[1,8],self:[1,4],sentenc:3,sentencepic:1,sentencepiec:[6,8],separ:3,seq_length:4,sequenc:4,sequenti:4,set:[1,4],setup:1,setuptool:8,sgd:5,sh951011:8,shape:4,should:[0,4,5],shuffl:1,side:4,silent:[0,4],similar:2,similarli:1,simpli:8,simplifi:8,sin:4,sinc:[0,4],sine:4,singl:[1,4,5],sinusoid:4,size:[1,4,6],slow:5,slowdown:5,small:8,smooth:4,softmax:4,solv:8,some:4,sooftwar:8,soohwan:8,sos:1,sos_id:1,sourc:[0,1,2,3,4,5,6],space:3,spec:1,specifi:5,spectrogram:1,spectrogramdataset:1,speech:4,split:1,sqrt:4,start:[2,4,7],state:1,step:[4,5],stft:1,str:[0,1,4,6],stride:4,string:[3,6],structur:[4,8],sub:[1,2,3,6],subclass:[0,4],subsampl:4,subspac:4,subword:1,sum:0,support:8,sure:8,swish:4,take:[0,4],target:[0,4],target_length:[0,4],teacher:4,teacher_forcing_ratio:4,techniqu:4,tensor:[0,1,4],term:4,test:[1,4],test_batch:4,test_dataload:1,test_step:[1,4],thei:1,them:[0,4],thi:[0,1,2,3,4,5,6,8],thing:8,those:8,three:2,time1:4,time2:4,time:[1,4],time_mask_num:1,timestep:5,togeth:1,token:[1,3],torch:[0,1,4,5],torchaudio:8,total_step:2,totensor:1,tpu:8,train:[1,4],train_batch:4,train_dataload:1,train_transcript:1,trainer:1,training_step:4,transcript:1,transform:[1,4],transformer_lr_schedul:2,transformerlrschedul:2,translat:4,transpos:4,transript:1,tri_stag:2,tri_stage_lr_schedul:2,tristagelrschedul:2,troubleshoot:7,tupl:[0,4],two:[3,4],type:[1,4],typic:4,under:8,union:1,unit:[3,4],unless:[1,5],updat:5,upgrad:8,use:[1,2,3,4,6,8],used:[4,5],user:8,using:8,util:1,utomat:8,utter:4,v_len:4,val_batch:4,val_dataload:1,valid:[1,4],validation_step:[1,4],valu:[4,5],varianc:[4,5],varieti:4,vector:4,version:8,view:4,virtual:8,visit:8,vocab:[1,3,4,7],vocab_s:[1,6],vocabulari:[1,4,6],w_k:4,w_o:4,w_q:4,w_v:4,warmup:[2,4],warmup_step:[2,4],wd_ratio:5,websit:8,weight:[0,4,5],weight_decai:5,when:[0,4,5],where:[1,4],whether:[1,4],which:[1,4],who:8,window:1,within:[0,4],word:3,worderrorr:[3,4],worker:1,wrapper:[4,5,8],xavier:4,y_hat:4,you:[1,4,8],your:8,yourself:1,zero:4},titles:["Criterion","Data","LR Scheduler","Metric","Model","Optim","Vocabs","Welcome to LASR\u2019s documentation!","Introduction"],titleterms:{activ:4,adamp:5,apex:8,attent:4,author:8,bit:8,code:8,contribut:8,convolut:4,criterion:0,crossentropi:0,ctc:0,data:1,dataset:1,decod:4,document:7,embed:4,encod:4,feed:4,forward:4,from:8,get:8,indic:7,instal:8,introduct:8,joint:0,lasr:7,librispeech:[1,6],licens:8,lightn:1,loader:1,loss:0,metric:3,model:4,modul:[1,4],optim:5,preprocess:1,prerequisit:8,radam:5,recogn:[4,8],schedul:2,sourc:8,speech:8,stage:2,start:8,style:8,tabl:7,train:8,transform:2,tri:2,troubleshoot:8,vocab:6,welcom:7}})